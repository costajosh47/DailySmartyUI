import React, {Component} from "react";
import AnimateHeight from "react-animate-height";

class Post extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: 0
        }
    }
    
    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>    
        })
        return topics;
    }

    getNameForPostLink(str) {
        var n = str.lastIndexOf('/');
        var link = str.substring(n+1, str.length);
        
        if(n+1 == str.length) {
            link= str.slice(0, n);
            n = link.lastIndexOf('/');
            link= str.substring(n + 1, str.length - 1);
        }

        if(link.includes('.html')) {
            link = link.substring(0, name.length -5);
        }

        if(link.includes('.htm')) {
            link = link.substring(0, name.length -4);
        }
        
        return link;
    }

    renderLinks(){
        let links = this.props.post_links.map((post_link, index) => {
            return(
                <div className="post-link" key={index}>
                <div className="post-link-box">

                </div>
                <div className="post-link-link">
                    <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a>
                </div>
            </div>
            )
        })
        return links;
    }
    
    render(){
        if(this.props.type == "recent") {
            return (
                <li className="recent-posts">
                <div className="recent-posts-title">
                    {this.props.title}
                </div>
                <div className="recent-posts-topics">
                    {this.renderTopics()}
                </div>
            </li>
            )
        } else if(this.props.type == 'result') {
            return (
                <li className="result-post"
                    onMouseEnter={() => {this.setState({height: 70})}}
                    onMouseLeave={() => {this.setState({height: 0})}}
                >

                    <div className='result-post-topics'>
                        {this.renderTopics()}
                    </div>

                    <div className='result-post-title'>
                        
                        <a href={this.props.url_for_post}>
                            {this.props.title}
                        </a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}

                    >
                        <div className='result-post-links'>
                            {this.renderLinks()}
                        </div>
                    </AnimateHeight>

                </li>
            )
        }
    }
}
export default Post;