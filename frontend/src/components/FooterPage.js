import React from "react"

class FooterPage extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    © Copyright {(new Date().getFullYear())} Gaétan Lajeune et Alice Borie
                </footer>
            </div>
        )
    }
}

export default FooterPage 