import React, {nodeRef} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({users ,posts, remove }) => {
  if (!posts.length) {
    return <h1 className="mt-10 text-center text-white text-2xl">Постов не найдено :(</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index, users) => (
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
