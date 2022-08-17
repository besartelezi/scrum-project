import "./Footer.module.scss";

function Footer() {
  return (
    <footer>
        <div className="container">
            <p>&copy; G-bay {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer