import React from 'react'


const NewsItem = (props) => {



    let { title, description, imageurl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger " style={{ left: '90%', zIndex: '1' }}>
                        {source}
                    </span>
                </div>
                <img src={!imageurl ? imageurl = "https://image.cnbcfm.com/api/v1/image/107279603-1690856583270-gettyimages-1566547460-tang-notitle230731_npoyu.jpeg" : imageurl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read-More</a>
                    <p className="card-text"><small className="text-muted">By{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
