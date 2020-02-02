import React from 'react';

export const Macros = () => (
    <div
        className="card"
        style={{
            width: '18rem;',
            marginTop: '20px'
        }}
    >
        <div className="card-body">
            <h5 className="card-title">C/C++ Macros</h5>
            <h6 className="card-subtitle mb-2 text-muted">Quick Guide</h6>
            <p className="card-text" style={{ paddingTop: '20px' }}>
                <pre>
                    <code className="hljs lisp">
                        #define bitset(
                        <span className="hljs-name">byte</span>
                        ,nbit) ((
                        <span className="hljs-name">byte</span>) |= (<span className="hljs-number">1</span>
                        &lt;&lt;(
                        <span className="hljs-name">nbit</span>))) <br />
                        #define bitclear(
                        <span className="hljs-name">byte</span>
                        ,nbit) ((
                        <span className="hljs-name">byte</span>) <span className="hljs-symbol">&amp;=</span>~ (
                        <span className="hljs-number">1</span>
                        &lt;&lt;(
                        <span className="hljs-name">nbit</span>))) <br />
                        #define bitflip(
                        <span className="hljs-name">byte</span>
                        ,nbit) ((
                        <span className="hljs-name">byte</span>) ^= (<span className="hljs-number">1</span>
                        &lt;&lt;(
                        <span className="hljs-name">nbit</span>))) <br />
                        #define bitcheck(
                        <span className="hljs-name">byte</span>
                        ,nbit) ((
                        <span className="hljs-name">byte</span>) &amp; (<span className="hljs-number">1</span>
                        &lt;&lt;(
                        <span className="hljs-name">nbit</span>)))
                    </code>
                </pre>{' '}
            </p>
        </div>
    </div>
);
