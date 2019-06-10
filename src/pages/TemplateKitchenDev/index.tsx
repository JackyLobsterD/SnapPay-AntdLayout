import React, { Fragment } from 'react';
import { Card } from 'antd';
// @ts-ignore
import Index from 'templatekitchen'


interface PageProps {
}

interface PageStates {
    inputJson: any,
    outputJson: any,
}

export default class PageDev extends React.Component <PageProps, PageStates> {
    constructor(props: Readonly<PageProps>) {
        super(props)
        this.state = {
            //inputJson is passed from backEnd
            inputJson: {
                "Array": [9, 9],
                "Boolean": false,
                "Null": null,
                "Number": 999,
                "Object": {"a": "b", "c": "d"},
                "String": "Hello World",
            },
            //this is a placeholder for output
            outputJson: {},
        }
    }

    //output handler
    handleGet(val: any) {
        this.setState({outputJson: val});
    }

    render() {
        return (
            <Fragment>
                <Card>
                    {/* tslint:disable-next-line:jsx-no-bind */}
                    <Index inputJson={this.state.inputJson} handleValue={this.handleGet.bind(this)}/>
                </Card>
                <Card style={{marginTop: '20px'}}>
                    <div>输出值(OutputJson)：{JSON.stringify(this.state.outputJson)}</div>
                </Card>
            </Fragment>
        );
    }
}
