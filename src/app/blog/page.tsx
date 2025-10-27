import styles from './blog.module.scss'

export default function Blog() {
  return (
    <div className={styles.page}>
        <section className={`${styles.intro} ${styles.section}`}>
            <h1 className={styles.heading}>The Latest</h1>
            <p className={styles.text}>Sit back, relax, and have your mind picked apart.</p>
        </section>
        <section className={`${styles.postsGrid} ${styles.section}`}></section>
    </div>
  )
}

