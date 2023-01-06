import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navbar.css'
import Button from 'react-bootstrap/Button';


const Navbar1 = ()=>{
    return(
        <div>
               <Navbar expand="lg" className='nav10'>
                <Container fluid className='cont10 justify-content-center align-items-center'>
                    <Navbar.Brand className='mb-2 pb-2 ms-2 navbrand'>
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCA5MCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQyNDggOC40NDk5NUMxMi4wOTkyIDEyLjEyODIgOC40MjUyOCAxNS40NTYyIDcuMTgzMzIgMTcuNTU4MUM1Ljk5MjM4IDE5LjU3MzYgNS41Nzc1MyAyMS40Nzg2IDYuNDQ4NyAyNS4xNThDNi40OTQ5NSAyNS4zNTMzIDYuMjk5NDQgMjUuNTI0IDYuMTE3MDQgMjUuNDQwM0M0LjU2MDY0IDI0LjcyNTkgMC41OTk2MTEgMjIuNTgzIDAuNTk5NjA5IDE3LjQ3NDNDMC41OTk2MDcgMTAuMjY4MiA4LjU3MDc2IDEwLjAxMDggOC4xOTYxNSAwLjI1Nzc3QzguMTg4NjIgMC4wNjE3MTg3IDguNDAzMDkgLTAuMDcxNTI2MyA4LjU2MzUyIDAuMDQxNDIxN0MxMS4xNzEzIDEuODc3NDggMTIuNzM1MiA0Ljk0Mzk4IDEyLjQyNDggOC40NDk5NVoiIGZpbGw9IiMwQ0EyOEIiLz4KPHBhdGggZD0iTTcuMjI1NDIgMjUuNzMxNkM3LjEzMTkxIDI1LjcwMyA3LjA2NjcgMjUuNjE3OCA3LjA2MyAyNS41MjAxQzYuOTcyMjggMjMuMTI5NiA4LjI1ODQ3IDIxLjU2NzQgOS43MDA2NSAyMC40MDg0QzEyLjkwMTggMTcuODM1OCAxNC44NzU2IDE0LjM2MTYgMTQuMDk0NCAxMC4zNDE4QzE0LjA0NzggMTAuMTAyIDE0LjMyODggOS45NDM3MyAxNC40ODU4IDEwLjEzMDlDMTUuMjM4OCAxMS4wMjg2IDE2LjAwNTkgMTIuMjQ1MiAxNi40MzA0IDEzLjEzMjFDMTguNDc3OSAxNy41MzA2IDE3LjM4NTIgMjIuNTcxMyAxMi40ODU3IDI1LjExNDlDMTAuOTUxOCAyNS44NzY1IDkuMTMwMzUgMjYuMzEzNiA3LjIyNTQyIDI1LjczMTZaIiBmaWxsPSIjM0JCRUFBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuMzc1MiA2LjUzODA5VjE0LjEzMzNIMjYuMDgzOVY3LjUxNTMzQzI2LjA4MzkgNi45NzU1MiAyNS42NTgyIDYuNTM4MDkgMjUuMTMyOCA2LjUzODA5SDIyLjY3MTlWMjQuNjM3OUMyMi42NzE5IDI1LjE3NzUgMjMuMDk3OSAyNS42MTUyIDIzLjYyMyAyNS42MTUySDI2LjA4MzlWMTcuMTk2OUgzMy4zNzUyVjI0LjYzNzlDMzMuMzc1MiAyNS4xNzc1IDMzLjgwMDkgMjUuNjE1MiAzNC4zMjYzIDI1LjYxNTJIMzYuNzg3MlY3LjUxNTMzQzM2Ljc4NzIgNi45NzU1MiAzNi4zNjEyIDYuNTM4MDkgMzUuODM1OCA2LjUzODA5SDMzLjM3NTJaIiBmaWxsPSIjRjBGMUY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcuOTc5MSAxMS4wMjk2VjIwLjA4QzQ3Ljk3OTEgMjAuOTAyNCA0Ny41NjI4IDIxLjY4MiA0Ni44NTY4IDIyLjA5MzJDNDQuODg1MiAyMy4yNDE2IDQyLjg0NTQgMjEuODA3MyA0Mi44NDU0IDE5LjkxNThWMTIuMDA3N0M0Mi44NDU0IDExLjQ2NzIgNDIuNDExIDExLjAyOTMgNDEuODc0OSAxMS4wMjkzSDM5LjM1MzhIMzkuMzUzNVYyMC4yMzg3QzM5LjM1MzUgMjMuMjAxNiA0MS43NTg1IDI1LjYyNTggNDQuNjk3NSAyNS42MjU4SDQ2LjEyNjZDNDkuMDY1OCAyNS42MjU4IDUxLjQ3MDUgMjMuMjAxNiA1MS40NzA1IDIwLjIzODVWMTIuMDA3N0M1MS40NzA1IDExLjQ2NzIgNTEuMDM2MSAxMS4wMjkzIDUwLjUwMDMgMTEuMDI5M0g0Ny45NzkxVjExLjAyOTZaIiBmaWxsPSIjRjBGMUY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODYuNzE3NiAyNS42MTQ3SDg5LjE4NTZWMTIuNzc4N0M4OS4xODU2IDEyLjIzNzQgODguNzU4MyAxMS43OTg4IDg4LjIzMTcgMTEuNzk4OEg4NS43NjM3VjI0LjYzNDZDODUuNzYzNyAyNS4xNzU5IDg2LjE5MDcgMjUuNjE0NyA4Ni43MTc2IDI1LjYxNDdaIiBmaWxsPSIjRjBGMUY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODcuNDk1NCAxMC4zNDQ5Qzg4LjU0NjUgMTAuMzQ0OSA4OS4zOTg3IDkuNDkyODIgODkuMzk4NyA4LjQ0MTUyQzg5LjM5ODcgNy4zOTAyMSA4OC41NDY1IDYuNTM4MDkgODcuNDk1NCA2LjUzODA5Qzg2LjQ0NCA2LjUzODA5IDg1LjU5MTggNy4zOTAyMSA4NS41OTE4IDguNDQxNTJDODUuNTkxOCA5LjQ5MjgyIDg2LjQ0NCAxMC4zNDQ5IDg3LjQ5NTQgMTAuMzQ0OVoiIGZpbGw9IiNGMEYxRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02My43MjgxIDE5LjU2M0M2My43MjgxIDIxLjMwMTkgNjIuMzI2MiAyMi40NTk1IDYwLjYxMjcgMjIuNDU5NUM1OC44OTkxIDIyLjQ1OTUgNTcuNDk3MiAyMS4zMDE5IDU3LjQ5NzIgMTkuNTYzVjE3LjA4MTVDNTcuNDk3MiAxNS4zNDI2IDU4Ljg5OTEgMTQuMTg0OSA2MC42MTI3IDE0LjE4NDlDNjIuMzI2MiAxNC4xODQ5IDYzLjcyODEgMTUuMzQyNiA2My43MjgxIDE3LjA4MTVWMTkuNTYzWk02MC42MTI3IDExLjAyOTNDNTYuOTg5OSAxMS4wMjkzIDU0LjAyNTQgMTMuNjU5MyA1NC4wMjU0IDE3LjMzNTdWMTkuMzI0MkM1NC4wMjU0IDIzLjAwMDggNTYuOTg5OSAyNS42MTUxIDYwLjYxMjcgMjUuNjE1MUM2NC4yMzU3IDI1LjYxNTEgNjcuMTk5NyAyMy4wMDA4IDY3LjE5OTcgMTkuMzI0MlYxNy4zMzU3QzY3LjE5OTcgMTMuNjU5MyA2NC4yMzU3IDExLjAyOTMgNjAuNjEyNyAxMS4wMjkzWiIgZmlsbD0iI0YwRjFGNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc5LjUyOTQgMTkuNTY3MUM3OS41Mjk0IDIxLjMwNDggNzguMTE4MiAyMi40NjE3IDc2LjM5MzcgMjIuNDYxN0M3NC42NjkxIDIyLjQ2MTcgNzMuMjU4MSAyMS4zMDQ4IDczLjI1ODEgMTkuNTY3MVYxNy4wODcyQzczLjI1ODEgMTUuMzQ5NSA3NC42NjkxIDE0LjE5MjcgNzYuMzkzNyAxNC4xOTI3Qzc4LjExODIgMTQuMTkyNyA3OS41Mjk0IDE1LjM0OTUgNzkuNTI5NCAxNy4wODcyVjE5LjU2NzFaTTc2LjM5MzcgMTEuMDM5MkM3NS4yNTQgMTEuMDM5MiA3NC4xNzkzIDExLjI5NTggNzMuMjQgMTEuNzYxVjcuNTE0MjNDNzMuMjQgNi45NzUxNSA3Mi44MDYgNi41MzgwOSA3Mi4yNzA5IDYuNTM4MDlINjkuNzYzN1YxOS4zMjg0QzY5Ljc2MzcgMjMuMDAyNiA3Mi43NDcyIDI1LjYxNTIgNzYuMzkzNyAyNS42MTUyQzgwLjA0IDI1LjYxNTIgODMuMDIzNSAyMy4wMDI2IDgzLjAyMzUgMTkuMzI4NFYxNy4zNDEzQzgzLjAyMzUgMTMuNjY3NCA4MC4wNCAxMS4wMzkyIDc2LjM5MzcgMTEuMDM5MloiIGZpbGw9IiNGMEYxRjQiLz4KPC9zdmc+Cg==' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navlink1 me-5 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="m-1 bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                                </svg>
                                Buy Crypto
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ms-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Col>
                            </Row>
                        </Nav.Link>
                        <Nav.Link className='navlink1 me-5 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white justify-content-center align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className = "mb-1 me-1 bi bi-bank" viewBox="0 0 16 16">
                                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                                </svg>
                                Markets
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ms-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Col>
                            </Row>
                        </Nav.Link>

                        <Nav.Link className='navlink1 me-5 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white justify-content-center align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="mb-1 me-1 bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                </svg>
                                Trade
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ms-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Col>
                            </Row>
                        </Nav.Link>

                        <Nav.Link className='navlink1 me-5 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white justify-content-center align-items-center'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Circle_sign_200.svg/1024px-Circle_sign_200.svg.png' width={'15px'} className=' me-1' />
                                Futures
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ms-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Col>
                            </Row>
                        </Nav.Link>

                        <Nav.Link className='navlink1 me-5 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white justify-content-center align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="mb-1 bi bi-currency-dollar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                </svg>
                                Finance
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="ms-1 bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Col>
                            </Row>
                        </Nav.Link>

                        <Nav.Link className='navlink1 me-3 ms-2'>
                            <Row className='tc d-flex justify-content-center align-items-center'>
                                <Col className='col-md-12 p-0 m-0 f6 col12 text-white justify-content-center align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className = "mb-1 me-1 bi bi-gift-fill" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                                </svg>
                                Rewards Hub
                 
                                </Col>
                            </Row>
                        </Nav.Link>
   
                    </Nav>
                    </Navbar.Collapse>
                    
                    <Nav.Link className='ms-auto me-1'>
                        <Button className='btn10 f6 pt-1 pb-1 pe-3 ps-'>Log In</Button>
                    </Nav.Link>

                    <Nav.Link className='ms-auto'>
                        <Button className='btn11 f6 pt-1 pb-1 pe-3 ps-3'>Register</Button>
                    </Nav.Link>

                    <Nav.Link className='me-3 ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-chat-left-text svg200" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </Nav.Link>

                    <Nav.Link className='me-3 ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-file-arrow-down svg200" viewBox="0 0 16 16">
                    <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    </Nav.Link>


                    <Nav.Link className='me-3 ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-translate svg200" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                    </svg>
                    </Nav.Link>
                </Container>
                </Navbar>
        </div>
    )
}

export default Navbar1