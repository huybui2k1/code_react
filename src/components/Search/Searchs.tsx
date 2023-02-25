import { useMemo } from 'react'
import SearchBar from './SearchBar'
import Select from './Select'
import { useItems } from './core/hooks'
import ItemsContainer from './ItemsContainer'
import { useSearchParams } from 'react-router-dom'
import SubjectFilters from './SubjectFilters'
import PriceFilter from './PriceFilter'
import './SearchStyle.css'
export default function SearchPage() {
  const [search, setSearch] = useSearchParams()
  const getItems = useItems()
  const items = useMemo(() => getItems.data?.products ?? [], [getItems.data])
  const itemCounts = useMemo(
    () =>
      items.reduce<Record<string, number>>((initial, item) => {
        if (!isNaN(initial[item.category])) {
          initial[item.category] += 1
        } else {
          initial[item.category] = 1
        }

        return initial
      }, {}),
    [items]
  )
  const maxPrice = (getItems.data?.maxPrice ?? 0) / 100

  return (
    <div className="mw9 center ph4 bg-white min-vh-100 br bl b--light-gray">
      <div className="flex bb b--black-10 justify-between items-center mb4">
        <h1> Course Finder</h1>

        <div className="mr3 ml-auto">
          <SearchBar />
        </div>

        <Select
          onChange={(e) => {
            search.set('sort', e.target.value)
            setSearch(search, {
              replace: true,
            })
          }}
          label="Sort by"
          name="sort"
          options={[
            {
              label: 'Name',
              value: 'name',
            },
            {
              label: 'Price High',
              value: 'priceDesc',
            },
            {
              label: 'Price Low',
              value: 'priceAsc',
            },
          ]}
        />
      </div>

      <div className="flex">
        <div className="w--25 mr4">
          <div style={{ position: 'sticky', top: '20px' }}>
            <ul className="list pa0 ma0 pb3 bb b--black-10">
              <li className="f6 fw5 silver mb2">
                <div className="flex justify-between">
                  Filters
                  <span>{items.length} Products</span>
                </div>
              </li>
              <li>
                <button className="btn bn fw5 pa0 pv2 w--100 tl bg-transparent hover-light-purple flex justify-between">
                  Front End
                  <span>{itemCounts['Front-End'] ?? 0}</span>
                </button>
              </li>
              <li>
                <button className="btn bn fw5 pa0 pv2 w--100 tl bg-transparent hover-light-purple flex justify-between">
                  Back End
                  <span>{itemCounts['Back-End'] ?? 0}</span>
                </button>
              </li>
              <li>
                <button className="btn bn fw5 pa0 pv2 w--100 tl bg-transparent hover-light-purple flex justify-between">
                  Full Stack
                  <span>{itemCounts['Full-Stack'] ?? 0}</span>
                </button>
              </li>
            </ul>

            <SubjectFilters />
            <PriceFilter maxPrice={maxPrice} />
          </div>
        </div>

        <ItemsContainer />
      </div>
    </div>
  )
}
