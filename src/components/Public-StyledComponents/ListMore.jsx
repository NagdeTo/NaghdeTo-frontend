import { DownOutlined, MoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { useState } from "react";

const ListMore= ({items})=>{
  return(
    <>
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
        <MoreOutlined className="cursor-pointer"  style={{cursor:'pointer'}}>
        </MoreOutlined>
      
  </Dropdown>
    </>
  )
}
export default ListMore;