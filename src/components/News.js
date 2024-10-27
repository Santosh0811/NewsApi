import React, { Component } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    capitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0 // Initialize totalResults
        };
        document.title = `${this.capitaliseFirstLetter(this.props.category)}`;
    }

    static defaultProps = {
        country: "us",
        pageSize: 6,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    async componentDidMount() {
        this.props.setProgress(0);
        const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30);

        try {
            let data = await fetch(apiurl);
            let parsedData = await data.json();
            this.props.setProgress(70);

            if (parsedData.articles) {
                this.setState({
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false
                });
            } else {
                console.error("No articles found:", parsedData);
                this.setState({ loading: false });
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }

        this.props.setProgress(100);
    }

    prevpage = async () => {
        if (this.state.page <= 1) return; // Prevent going back if already on the first page

        this.props.setProgress(0);
        const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30);

        try {
            let data = await fetch(apiurl);
            let parsedData = await data.json();
            this.props.setProgress(70);

            if (parsedData.articles) {
                this.setState({
                    page: this.state.page - 1,
                    articles: parsedData.articles,
                    loading: false
                });
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }

        this.props.setProgress(100);
    }

    nextpage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) return; // Prevent going to non-existent pages

        this.props.setProgress(0);
        const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30);

        try {
            let data = await fetch(apiurl);
            let parsedData = await data.json();
            this.props.setProgress(70);

            if (parsedData.articles) {
                this.setState({
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false
                });
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }

        this.props.setProgress(100);
    }

    render() {
        return (
            <>
                <div className='container my-4'>
                    <h1 className='text-center'>News App - Top {this.capitaliseFirstLetter(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className='row'>
                        {
                            !this.state.loading && this.state.articles.length > 0 ? (
                                this.state.articles.map((element) => (
                                    <div className='col-md-4 my-3' key={element.url}>
                                        <Card
                                            images={element.urlToImage}
                                            title={element.title ? element.title.slice(0, 45) : "TITLE NOT AVAILABLE"}
                                            description={element.description ? element.description.slice(0, 88) : "DESCRIPTION NOT AVAILABLE"}
                                            newsurl={element.url}
                                            sourcename={element.source.name ? element.source.name : "SOURCE NOT AVAILABLE"}
                                            author={element.author ? element.author : "AUTHOR NOT AVAILABLE"}
                                            publishedAt={element.publishedAt ? element.publishedAt : "TIME NOT AVAILABLE"}
                                        />
                                    </div>
                                ))
                            ) : (
                                !this.state.loading && <div>No articles available.</div>
                            )
                        }
                    </div>
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevpage}>&larr; Previous</button>
                    <b>Page No. {this.state.page} of {Math.ceil(this.state.totalResults / this.props.pageSize)}</b>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News;
