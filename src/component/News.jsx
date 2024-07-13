import { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 21,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize(strin) {
    return strin.charAt(0).toUpperCase() + strin.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalRes: 0,
      loading: true,
      page: 1,
    };
    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
  }

  async componentDidMount() {
    this.props.setProgress(25);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }&page=${this.state.page}`;
    let fetchApi = await fetch(url);
    this.props.setProgress(50);
    let parsedApi = await fetchApi.json();
    console.log(parsedApi);
    this.props.setProgress(75);
    this.setState({
      articles: parsedApi.articles,
      totalRes: parsedApi.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }&page=${this.state.page + 1}`;
    this.setState({ page: this.state.page + 1 });
    let fetchApi = await fetch(url);
    let parsedApi = await fetchApi.json();
    this.setState({
      articles: this.state.articles.concat(parsedApi.articles),
      totalRes: parsedApi.totalResults,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title-font text-center text-3xl font-bold text-black mb-6 mt-[10rem] md:mt-[6rem]">
          NewsMonkey - Top {this.capitalize(this.props.category)} HeadLines
        </h1>
        {this.state.loading && <Spinner />}
        {this.state.articles ? (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalRes}
            loader={<Spinner />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {console.log(this.state.articles.length, this.state.totalRes)}
              {console.log(this.state.articles.length != this.state.totalRes)}
              {this.state.articles.map((elem) => {
                return (
                  <div key={elem.url}>
                    <Newsitem
                      title={elem.title}
                      desc={elem.description}
                      imgUrl={elem.urlToImage}
                      newsUrl={elem.url}
                    />
                  </div>
                );
              })}
              ;
            </div>
          </InfiniteScroll>
        ) : (
          <h1 className="font-bold text-2xl text-center text-pink-500">
            No Articles Or News To Show
          </h1>
        )}
      </div>
    );
  }
}

export default News;
