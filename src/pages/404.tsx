import * as React from "react"
import {useEffect} from "react"
import {HeadFC, navigate} from "gatsby"

const NotFoundPage = () => {
    useEffect(() => {
        navigate('/').finally();
    }, []);

    return <div/>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>
