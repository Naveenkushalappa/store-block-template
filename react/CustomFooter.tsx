import React, { FC } from 'react'
import styles from './CustomizedFooter.css'

type Props = {
  deviceType: string
}
const CustomFooter: FC<Props> = ({ deviceType }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        {columns.map((column) => (
          <div key={column.label} className={styles.column}>
            <h3 className={styles.label}>{column.label}</h3>
            <ul className={styles.linkList}>
              {column.items.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                  <a href={item.link} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomFooter