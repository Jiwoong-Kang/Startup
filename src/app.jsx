import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default function App() {
    return (
        <div class = "app">
            <div class="page-content">
                <h1 class="image-container">Codesharing<sup>&reg;</sup></h1>
                <header>
                    <nav>
                        <div class="container">
                            <div id="list"><a href="index.html">Home</a></div>
                     </div>
                    </nav>

                    <hr />
                 </header>

                 <main>
                    Components go here        
                </main>
            </div>
            <footer>
                <hr />
                <span class="text-reset">Author Name(s)</span>
                <br />
                <a href="https://github.com/Jiwoong-Kang/Startup.git">Jiwoong Kang</a>
            </footer>
    
        </div>
    );
}