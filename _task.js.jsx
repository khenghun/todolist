class Task extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        editable: false
      }
      this.handleEdit = this.handleEdit.bind(this)
    }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let priority = this.priority.value
      let deadline = this.deadline.value
      let id = this.props.task.id
      let task = {id: id, name: name, description: description, priority: priority, deadline: deadline}
      this.props.handleUpdate(task)
    }
        this.setState({
          editable: !this.state.editable
        })
  }



  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.task.name}/>:<h3>{this.props.task.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.task.description}/>:<p>{this.props.task.description}</p>
    let priority = this.state.editable ? <input type='text' ref={input => this.priority = input} defaultValue={this.props.task.priority}/>:<p>{this.props.task.priority}</p>
    let deadline = this.state.editable ? <input type='text' ref={input => this.deadline = input} defaultValue={this.props.task.deadline}/>:<p>{this.props.task.deadline}</p>

    return(
      <div>
        {name} {description} {priority} {deadline}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.task.id)}>Delete</button>
      </div>
  )
  }
}
