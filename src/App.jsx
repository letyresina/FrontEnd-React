import './App.scss'

function App() {

  return (
    <>
      <div className='container'>
        <section className='estrutura'>
          <article className='box'>
            <h1>Nossa estrutura</h1>
            <div className='imagem'>
              <img src="https://picsum.photos/350/200" alt="Imagem aleatória"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi in nisi sunt ullam similique id 
                veritatis fuga quo doloremque architecto hic cumque doloribus inventore nesciunt, recusandae eaque 
                tempora reiciendis distinctio.
              </p>
            </div>
            <div className='imagem'>
              <img src="https://picsum.photos/350/200" alt="Imagem aleatória"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi in nisi sunt ullam similique id 
                veritatis fuga quo doloremque architecto hic cumque doloribus inventore nesciunt, recusandae eaque 
                tempora reiciendis distinctio.
              </p>
            </div>
            <a href="#">
              Veja Mais
            </a>
          </article>
        </section>

        <section className='estrutura-card'>

          <h1>Criando Mixins</h1>
          <div>
            <article>
              <p>
                Lorem
              </p>
            </article>

            <article>
              <p>
                Lorem
              </p>
            </article>

            
            <article>
              <p>
                Lorem
              </p>
            </article>
          </div>

        </section>
      </div>
    </>
  )
}

export default App
