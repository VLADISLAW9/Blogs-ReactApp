import React, {nodeRef} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({users ,posts, remove }) => {
  if (!posts.length) {
    return <h1 className="text-center text-white text-xl">Постов не найдено</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            nodeRef={nodeRef}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} users = {users}  post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
