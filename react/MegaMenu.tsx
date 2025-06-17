import React from "react"
import styles from './MegaMenu.css'

type MenuItem = {
    label: string;
    link?: string;
    children?: MenuItem[];
};

interface MegaMenuProps {
  menuData: MenuItem[]
}

const MegaMenu: StorefrontFunctionComponent<MegaMenuProps> = ({ menuData }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                {menuData.map((item: MenuItem) => (
                    <li key={item.label} className={styles.menuItem}>
                        <span>{item.label}</span>
                        {item.children && (
                            <div className={styles.dropdown}>
                                {item.children.map((subItem: MenuItem) => (
                                    <div key={subItem.label} className={styles.subMenuColumn}>
                                        <h4>{subItem.label}</h4>
                                        {subItem.children && Array.isArray(subItem.children) && (
                                            <ul>
                                                {subItem.children.map((link) => (
                                                    <li key={link.label}>
                                                        <a href={link.link}>{link.label}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                        }
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

MegaMenu.defaultProps = {
    menuData: [
        {
            label: 'Shop',
            children: [
                {
                    label: 'Jewellery',
                    children: [
                        { label: 'Rings', link: '/shop/jewellery/rings' },
                        { label: 'Necklaces', link: '/shop/jewellery/necklaces' },
                    ],
                },
                {
                    label: 'Fashion',
                    children: [
                        { label: 'Clothing', link: '/shop/fashion/clothing' },
                        { label: 'Accessories', link: '/shop/fashion/accessories' },
                    ],
                },
            ],
        },
        {
            label: 'About',
            children: [
                { label: 'Our Story', link: '/about/story' },
                { label: 'Press', link: '/about/press' },
            ],
        },
        {
            label: 'Help',
            children: [
                { label: 'FAQs', link: '/help/faqs' },
                { label: 'Returns', link: '/help/returns' },
            ],
        },
    ],
}


MegaMenu.schema = {
    title: 'Mega Menu',
    description: 'Multilevel navigation menu',
    type: 'object',
    properties: {
        menuData: {
            title: 'Menu Items',
            type: 'array',
            items: {
                title: 'Menu Group',
                type: 'object',
                properties: {
                    label: {
                        title: 'Label',
                        type: 'string',
                    },
                    children: {
                        title: 'Sub Items',
                        type: 'array',
                        items: {
                            title: 'Sub Group',
                            type: 'object',
                            properties: {
                                label: {
                                    title: 'Sub menu',
                                    type: 'string',
                                },
                                children: {
                                    title: 'Links',
                                    type: 'array',
                                    items: {
                                        title: 'Link',
                                        type: 'object',
                                        properties: {
                                            label: {
                                                title: 'Label',
                                                type: 'string',
                                            },
                                            link: {
                                                title: 'Link URL',
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}
export default MegaMenu