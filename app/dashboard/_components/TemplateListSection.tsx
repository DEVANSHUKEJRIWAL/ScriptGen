'use client'
import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[]
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}

function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates)
    }
  }, [userSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {templateList.map((item: TEMPLATE) => (
        <TemplateCard key={item.slug} {...item} />
      ))}
    </div>
  )
}

export default TemplateListSection
