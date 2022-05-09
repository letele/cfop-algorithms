import Link from "next/link"

function Footer(){
    const date = new Date()


    return (
    <footer>
        &copy; <Link href="/">CFOP</Link> {date.getFullYear()}
    </footer>
    )
}
export default Footer