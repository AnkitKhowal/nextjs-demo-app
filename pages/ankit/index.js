import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log("Data", data);

    return {
        props: { ninjas: data }
    }
}


const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={"/ankit/" + ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;