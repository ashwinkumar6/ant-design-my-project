import React, { Component } from "react";
import {Radio, Form } from "antd";

const FormItem = Form.Item;

class ConnectionResult extends Component {
    render(){
        return(
            <div>
                <span className="btn-grp">
                    <FormItem>
                        <Radio.Group>
                            <Radio.Button value="successful"> Successful </Radio.Button>
                            <Radio.Button value="failed"> Failed </Radio.Button>
                            <Radio.Button value="all"> All </Radio.Button>
                        </Radio.Group>
                    </FormItem>
                </span>
            </div>
        )
    }
}
export default ConnectionResult;
