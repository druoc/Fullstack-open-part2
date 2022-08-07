import React from 'react';

const Course = (props) => {
    return (
        <>
            <p>{props.courseName} {props.courseParts}</p>
        </>
    );
};

export default Course;
