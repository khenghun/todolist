const AllTasks = (props) => {
  var tasks = props.tasks.map((task) => {
    return(
      <div class="container">

      <div key={task.id}>

     <div class="row">
      <div class="col">
        <h5>{task.name}</h5>
      </div>
      <div class="col">
        {task.description}
      </div>
      <div class="col">
        {task.priority}
      </div>
      <div class="col">
        {task.deadline}
      </div>

      <button onClick={() => props.handleUpdate(task)} className="button muted-button">
        Edit
      </button>

      <button onClick={() => props.handleDelete(task.id)} className="button muted-button">
        Delete
      </button>

    </div>
  </div>
</div>

    )
  })

return(
      <div>
      {tasks}
      </div>
    )
}
