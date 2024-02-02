import styles from '@/app/styles/common.module.css'
import Link from 'next/link';

const NotFound = () => {
    return (
        <section className={styles.container}>
            <div className={styles.error_page}>
                <div>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could Not Find Requested Resource</p>
                <Link href='/'>
                    <button>
                        Go To Homepage
                    </button>
                </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;