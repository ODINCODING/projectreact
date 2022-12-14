function BlogCard() {
  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="title">Places i've been</h1>
          </div>
        </div>
        <div id="app" className="row columns is-multiline">
          <div v-for="card in cardData" key="card.id" className="column is-4">
            <div className="card large">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img src="card.image" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="card.avatar" alt="Image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4 no-padding"></p>
                    <p>
                      <span className="title is-6">
                        <a href=""></a>{" "}
                      </span>{" "}
                    </p>
                    <p className="subtitle is-6"></p>
                  </div>
                </div>
                <div className="content">
                  <div className="background-icon">
                    <span className="icon-twitter"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
