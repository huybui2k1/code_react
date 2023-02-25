const express = require('express')
const cors = require('cors')
const { isNil } = require('lodash')
const data = require('./data.jsx')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function containsSubjects(subjects, product) {
  // base case, do not skip products when there are no subject filters
  if (!subjects) return true

  const selectedSubjects = new Set(subjects.split(','))
  const productSubjects = product.subject

  // check if any of the product subjects are in the filter
  for (const subject of productSubjects) {
    if (selectedSubjects.has(subject)) {
      return true
    }
  }

  // does not contain any of the filtered subjects, skip this product
  return false
}

function applyFilters(products, { query, sort, subjects, minPrice, maxPrice }) {
  const filteredProducts = []

  // skip products based on filters
  for (const product of products) {
    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      continue
    }

    if (!containsSubjects(subjects, product)) {
      continue
    }

    if (!isNil(minPrice) && product.price / 100 < minPrice) {
      continue
    }

    if (!isNil(maxPrice) && product.price / 100 > maxPrice) {
      continue
    }

    filteredProducts.push(product)
  }

  return filteredProducts.sort((a, b) => {
    const { name, price } = a
    const { name: nameB, price: priceB } = b

    switch (sort) {
      case 'priceDesc':
        return priceB - price
      case 'priceAsc':
        return price - priceB
      default:
        return name.localeCompare(nameB)
    }
  })
}

app.get('/items', (req, res) => {
  // compute the max price for the filter
  const maxPrice = Math.round(Math.max(...data.map((product) => product.price)))

  // fake the request to a backend search service like solr or elasticsearch
  setTimeout(() => {
    res.json({ products: applyFilters(data, req.query), maxPrice })
  }, 250)
})

app.listen(3001, () => {
  console.info('server listening on: 3001')
})
