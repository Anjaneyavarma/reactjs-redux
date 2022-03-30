import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function PostComponent() {
    const posts = useSelector(state => state.allPosts.posts);

    const renderPost = posts.map((post)=>{
        
        const {id, title, body} = post

        return(
            <div>
                <Link to={`product/${id}`}>
                <div key={id}>
                    <ol>
                        <li><strong>{title}</strong></li>
                        <li>{body}</li>
                    </ol>
                </div>
                </Link>
            </div>
        )
    })
    
    return (
       <div>
           {renderPost}
       </div>
    );
}
