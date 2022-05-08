import React from 'react';

const Blogs = () => {
    return (
        <div className='container fixed-height my-5'>
            <div className='car-details p-4'>
                <h4>Difference between Javascript and nodejs:</h4>
                <p><b>Javascript:</b> it is a programming language that runs on browser with the browser engine like V8 for Chrome. It is used on the client-side. It is used for fontend development. JavaScript follows Java Programming language standard. </p>
                <p><b>Node js:</b> it is a Javascript runtime environment that allows js to run outside the browser mostly on the server-side or backend. Node js is an interpreter that holds some libraries so that js can perform any non-blocking operation such as creating or executing a shell script. It is written in C++.</p>
            </div>
            <div className='car-details p-4 my-3'>
                <h4>When should we use Node js and when should we use MongoDB</h4>
                <p><b>Node js:</b> is used to build servers that can respond to web requests. It helps js code to connect the client-side with the server-side. Any project needs a programming environment and a runtime library that can compile or interpret our code. So when we need compile the code and build an server we can use Node js.</p>
                <p><b>MongoDB:</b> is a database engine. Any server site code uses MongoDB to store, query or update data in a database. So when we need to create the database, the ability to persistently store data in a way that we can efficiently query or update it later, we should use MongoDB.</p>
            </div>
            <div className='car-details p-4 my-3'>
                <h4>Differences between sql and nosql databases.</h4>
                <ol>
                    <li> SQL databases are relational, NoSQL databases are non-relational or distributed database system.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL have fixed or static or predefined schema, whereas NoSql have dynamic schema.</li>
                    <li>SQL databases designs are table-based, while NoSQL databases designs are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are suitable for multi-row transactions, while NoSQL is suitable for unstructured data like documents or JSON.</li>
                </ol>
            </div>
            <div className='car-details p-4 my-3'>
                <h4>What is the purpose of jwt and how does it work:</h4>
                <p><b>Purpose of jwt:</b> json web token is a mechanism to secure data between two parties the client and the server. Each jwt is a combination of encoded JSON objects and a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p><b>Working of jwt:</b> when user logins to the website, server creates a token and send to the client-side. The token is stored in client-side localStorage or browser cookie. Next time if user makes any request that particuler token for that user is sent from client to server-side by a bearer. Then server verifies the token, if token is valid server responds to the client's request. If token is not verified, request is denied.</p>
            </div>
        </div>
    );
};

export default Blogs;