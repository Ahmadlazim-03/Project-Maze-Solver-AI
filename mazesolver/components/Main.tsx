import React from 'react'
import Image from 'next/image'
import "./style.css"

const Main = () => {
  return (
    <main className="main">
    <section id="hero" className="hero section">

      <Image src="/hero-bg-abstract.jpg" alt="Hero Image" width={500} height={300} priority className="" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Project AI Kelompok 1</h1>
            <p>Maze Solver - Labirin sederhana untuk mencapai jalan keluar ( BFS )</p>
          </div>
        </div>
        <div className="text-center">
          <a href="/maze-solver.html" className="btn-get-started">Play Games</a>
        </div>

        <div className="text-center">
          <p style={{ marginTop:'50px' }}>Sistem Pakar - Forward Chaining ( Rekomenasi Outfit )</p>
          <a style={{ backgroundColor:'black'}} href="/sistem-pakar" className="btn-get-started">Open Project</a>
          <p className="mt-5">Anggota Kelompok : </p>
        </div>

        <div className="row gy-4 mt-3 text-center">
          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command"></i></div>
              <h4 className="title">Noga Salsabilla Aalalfala</h4>
              <p className="description">NIM : 434231007</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command"></i></div>
              <h4 className="title">Ahmad Lazim</h4>
              <p className="description">NIM : 434231033</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command"></i></div>
              <h4 className="title">Inunk Rodliyah</h4>
              <p className="description">NIM : 434231063</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command"></i></div>
              <h4 className="title">Mohammad Hafidz Al Maaher</h4>
              <p className="description">NIM : 434231117</p>
            </div>
          </div>

        </div>
      </div>

    </section>

   
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>About<br /></h2>
        <p>Maze Solver - Labirin sederhana untuk mencapai jalan keluar ( BFS )</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content">
            <p>
            Dalam permainan ini, pemain akan diberikan labirin dengan titik awal dan akhir yang telah ditentukan. Algoritma BFS digunakan untuk mencari jalur terpendek dari titik awal ke tujuan dengan mengeksplorasi setiap kemungkinan secara sistematis.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Algoritma BFS memastikan bahwa solusi yang ditemukan adalah jalur terpendek.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>User dapat menambahkan rintangan pada labirin.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span> Antarmuka yang intuitif dan pengalaman bermain yang interaktif.</span></li>
            </ul>
          </div>

          <div className="col-lg-6">
            <p>Maze Solver adalah sebuah permainan labirin sederhana yang dirancang untuk membantu pemain menemukan jalan keluar menggunakan algoritma BFS (Breadth-First Search). Game ini menguji kemampuan berpikir logis pemain dalam menyelesaikan tantangan labirin dengan strategi optimal.</p>
            <a href="https://en.wikipedia.org/wiki/Breadth-first_search" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

        </div>

      </div>

    </section>

  </main>
  )
}

export default Main