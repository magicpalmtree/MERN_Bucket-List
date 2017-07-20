// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// const SimpleForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Title</label>
//         <div>
//           <Field name="Title" component="input" type="text" placeholder=""/>
//         </div>
//       </div>
//       <div>
//         <label>Category</label>
//         <div>
//           <Field name="Category" component="input" type="text" placeholder=""/>
//         </div>
//       </div>
//       <div>
//         <label>URL</label>
//         <div>
//           <Field name="URL" component="input" type="text" placeholder=""/>
//         </div>
     
//       <div>
//         <label>Content</label>
//         <div>
//           <Field name="Content" component="textarea"/>
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </ form>
//   )
// }

// export default reduxForm({
//   form: 'simple'  // a unique identifier for this form
// })(SimpleForm)
