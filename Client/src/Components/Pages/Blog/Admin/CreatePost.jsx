import React, {useEffect} from "react";
import {useState} from "react";
import axios  from "axios";
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, {modules, formats} from "./Editor/EditorToolbar";
import './CreatePost.css';
import ReactQuill from "react-quill";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../../AuthProvider";
import {CheckIfUserHasAdminRole} from "../../../CheckIfUserHasAdminRole";
const CreatePost =()=>  {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [success, setSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const { token } = useAuth();
    const isAdmin = CheckIfUserHasAdminRole(token);

    const [error, setError] = useState(null);
    const handleCreatePost = async (ev) => {

        console.log(typeof(files[0]) );
        // const base64StringVariable = base64String;
        ev.preventDefault();
        ev.persist();
        const response = await axios.post("http://localhost:8080/post-create", ({
            "title": title,
            "content": content,
            "file": files[0]
        }), { headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            setSuccess(true);
            setRedirect(true);
        } else {
            setError(response.statusText);
        }
    };

    useEffect(() => {
        if (success) {
            alert("Post created successfully!");
        } else if (error) {
            alert(error);
        }
    }, [success, error]);

    if (redirect){
        return <Navigate to={'/novinky'} />
    }

    if(isAdmin) {
        return (
            <div className="App" style={{backgroundColor: '#232222'}}>
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleCreatePost}>
                            <h3 className="content" style={{color: 'gold'}}> Nový Príspevok </h3>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold" style={{color: 'gold'}}> Titulok <span
                                        className="required"> * </span> </label>
                                    <input type="title"
                                           placeholder={'Title'}
                                           value={title}
                                           onChange={ev => setTitle(ev.target.value)}
                                           className="form-control"
                                           required/>
                                </div>
                                <div className="clearfix"></div>
                                {/*<div className="form-group col-md-12">
                                    <label className="font-weight-bold" style={{color: 'gold'}}> Úvodný text <span className="required"> * </span> </label>
                                    <input type="summary"
                                           placeholder={'Summary'}
                                           value={summary}
                                           onChange={ev => setSummary(ev.target.value)}
                                           required />
                                </div>*/}
                                <br/>
                                <div className="form-group col-md-12">
                                    <input type="file" style={{backgroundColor: "white"}}
                                           onChange={ev => setFiles(ev.target.files)}/>
                                </div>
                                <label className="font-weight-bold" style={{color: 'gold'}}> Text <span
                                    className="required"> * </span> </label>
                                <div className="form-group col-md-12 editor" style={{backgroundColor: 'white'}}>
                                    <EditorToolbar toolbarId={'t1'}/>
                                    <ReactQuill
                                        theme="snow"
                                        value={content}
                                        onChange={setContent}
                                        placeholder={"Write something awesome..."}
                                        modules={modules('t1')}
                                        formats={formats}
                                    />
                                </div>
                                <br/>
                                <div className="form-group col-sm-12 text-right">
                                    <button style={{marginTop: '5px'}}>Vytvoriť</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }else{
        return <Navigate to={'/novinky'} />
    }
};

export default CreatePost;
