import React from 'react'
import styles from './App.module.scss'
import * as icons from '@bestdoctor/icons'
import { IconCard } from '../components/IconCard/IconCard'

function App() {
  const { letterIcons, bestDoctorIcon, ...rest } = icons

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Common Icons</h1>
      <ul className={styles.iconsList}>
        {Object.entries(rest).map(([title, Icon]) => {
          return (
            <li key={title}>
              <IconCard title={title} icon={Icon} />
            </li>
          )
        })}
      </ul>

      <h1 className={styles.title}>Favicons</h1>
      <div className={styles.subcontainer}>
        <h2 className={styles.title}>Common</h2>
        <ul className={styles.iconsList}>
          <li>
            <IconCard title="bestDoctorIcon" icon={bestDoctorIcon.data} />
          </li>
        </ul>
        <h2 className={styles.title}>Letters</h2>
        <ul className={styles.iconsList}>
          {Object.entries(letterIcons).map(([title, iconHtml]) => {
            return (
              <li key={title}>
                <IconCard title={title} icon={iconHtml} />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default App
