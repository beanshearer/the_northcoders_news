import PostOrPatchRequests from "./PostOrPatchRequests";

const Votes = (arr, typeName, id, name_id, bool, key = typeName) => {
  let newArr = [...arr];
  const index = newArr.findIndex(comment => comment[name_id] === id);
  let { votes, ...restOfInfo } = newArr[index];
  let change = 0;
  let truth = true;
  if (!bool) change = 1;
  else {
    change = -1;
    truth = false;
  }
  PostOrPatchRequests("patch", key, `${typeName}/${id}`, {
    inc_votes: change
  });
  const incrementedVote = {
    ...restOfInfo,
    votes: votes + change
  };
  newArr.splice(index, 1, incrementedVote);
  return { [typeName]: newArr, [id]: truth };
};

export default Votes;
