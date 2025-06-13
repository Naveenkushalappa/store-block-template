import React, { FC, useState } from 'react'
import styles from './CustomizedFooterMobile.css'

type Props = {
  deviceType: string
}
const CustomFooterMobile: FC<Props> = ({ deviceType }) => {
  console.log('type', deviceType)
  const columns = [
    {
      label: 'Shop',
      items: [{ 'label': 'Our Artists', 'link': '/artists' },
      { 'label': 'Jewellery', 'link': '/jewellery' },
      { 'label': 'Fashion', 'link': '/fashion' },
      { 'label': 'Music', 'link': '/music' },
      { 'label': 'Literature', 'link': '/literature' },
      { 'label': 'For your home', 'link': '/for-your-home' },
      ]
    },
    {
      label: 'About',
      items: [{ 'label': 'Our story', 'link': '/story' },
      { 'label': 'Press', 'link': '/press' },
      { 'label': 'Contact Us', 'link': '/contact-us' }
      ]
    },
    {
      label: 'Help',
      items: [{ 'label': 'FAQs', 'link': '/faqs' },
      { 'label': 'Returns & Refunds', 'link': '/returns-refunds' },
      { 'label': 'My account', 'link': '/my-account' }
      ]
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.container}>
      {columns.map((column, index) => (
        <div key={column.label} className={styles.section}>
          <h3 className={styles.label} onClick={() => toggleIndex(index)}>{column.label}

            <span className={styles.arrow}>
              {openIndex === index ? '▲' : '▼'}
            </span>
          </h3>

          {openIndex === index && (
            <ul className={styles.linkList}>
              {column.items.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                  <a href={item.link} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default CustomFooterMobile