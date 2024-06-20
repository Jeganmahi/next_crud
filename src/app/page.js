import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import Table from "@/app/Table.js";
import Form from "./Form";
export default function Home() {

  return (

    <main className={styles.main}>

      <Form />
      <Table   />
      {/* <Table/> */}
    </main>
  );
}
