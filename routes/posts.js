import express from 'express';

const router = express.Router();

let posts = [
  {
    id:1, title: 'post one'
  },
  {
    id:2, title: 'post two'
  },
  {
    id:3, title: 'post three'
  },

];

router.get('/', (req,res) => {
  
  const limit = parseInt(req.query.limit);

  if(!isNaN(limit) && limit > 0) {
   return res.status(200).json(posts.slice(0,limit));

  }
    res.status(200).json(posts);
  


  
});

  //Get single posts
router.get('/:id', (req,res) => {
  console.log(req.params.id);
  const post =  posts.find((post) => post.id === id);

  if(!post) {
    return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
  }
  res.status(200).json({msg: `A post with the id ${post} is present`});
})  ;

export default router;