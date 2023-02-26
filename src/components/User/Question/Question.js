import React, { useState } from 'react';

import Select from 'react-select';
import { Navigate, useNavigate } from 'react-router-dom';

function Question() {
    const [selecteQuiz, setSelecteQuiz] = useState({});
    const Navigate = useNavigate();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className="Question.container p-5">
            <div className="title-heading Tile-Heading display-6">Mangane Question</div>
            <div className="addNew-question mt-4 ml-5">
                <div className="col-6 from-group mb-2">
                    <label className="mb-3">Select Quiz </label>
                    <Select
                        defaultValue={selecteQuiz}
                        onChange={setSelecteQuiz}
                        options={options}
                    />
                </div>
                <div className="col-6 from-group  mt-3">
                    <label className="mb-2">Add Question </label>

                    <div className="form-floating ">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                        ></textarea>
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                </div>
                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-success me-2"
                        onClick={() => Navigate('/User')}
                    >
                        Save Question
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Question;
