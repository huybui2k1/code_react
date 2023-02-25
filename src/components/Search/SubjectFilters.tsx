import CollapsibleList from './CollapsibleList'
import { getUniqueValues } from './core/utils'
import { useState } from 'react'
import { useItems } from './core/hooks'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useSearchParams } from 'react-router-dom'
import FilterToggle from './FilterToggle'
import { Product } from './core/types'

export default function SubjectFilters() {
  const [search, setSearch] = useSearchParams()
  const filteredSubjects = search.get('subjects')?.split(',') ?? []
  const [subjects, setSubjects] = useState(filteredSubjects)
  const getItems = useItems()
  const items = getItems.data?.products ?? []
  const allSubjects = getUniqueValues<string, Product>(items, 'subject')
  const groupedItems = allSubjects
    .map((subject) => ({
      label: subject,
      name: subject,
      value: subject,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
  const onSubjectChange =
    (subject: string) => (checked: Checkbox.CheckedState) => {
      let _subjects = subjects.slice()

      if (checked) {
        _subjects.push(subject)
      } else {
        _subjects = _subjects.filter((_Subject) => _Subject !== subject)
      }

      setSubjects(_subjects)
    }
  const hasFilters = filteredSubjects.length > 0

  return (
    <CollapsibleList
      defaultVisible={hasFilters}
      title="Subject"
      actionButton={
        <FilterToggle
          visible={subjects.length > 0}
          active={hasFilters}
          onApply={() => {
            search.set('subjects', subjects.join(','))
            setSearch(search, {
              replace: true,
            })
          }}
          onClear={() => {
            search.delete('subjects')
            setSubjects([])
            setSearch(search, {
              replace: true,
            })
          }}
        />
      }
    >
      {groupedItems
        .filter((f) => {
          if (filteredSubjects.length === 0) {
            return true
          }

          return filteredSubjects.includes(f.value)
        })
        .map((field, key) => (
          <li key={key} className="pv2">
            <div className="flex items-center">
              <Checkbox.Root
                id={field.name}
                name={field.name}
                disabled={hasFilters}
                onCheckedChange={onSubjectChange(field.value)}
                checked={subjects.includes(field.value)}
                className="checkbox lh-solid flex items-center justify-center pa0 bg-white w125 h125 br2 bn"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="checkbox__icon w125 h125" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor={field.name} className="ml3 fw5 f5">
                {field.label}
              </label>
            </div>
          </li>
        ))}
    </CollapsibleList>
  )
}
