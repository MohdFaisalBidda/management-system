import { DatePicker, Input, Modal, Select, Space, Table, Tag } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd/es/radio';
import Search from 'antd/es/input/Search';
import { Option } from 'antd/es/mentions';


const Main = () => {
    const [todo, setTodo] = useState({ time: "", title: "", desc: "", due: "", tag: [], status: "" })
    const [dataSource, setDataSource] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);




    const columns = [
        {
            title: 'Timestamp',
            dataIndex: 'time',
            key: 1,
            sorter: (record1, record2) => {
                return record1.time > record2.time
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 2,
            filteredValue: [searchText],
            onFilter: (value, record) => {
                return (
                    String(record.title).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.desc).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.due).toLowerCase().includes(value.toLowerCase())
                )
            },
            sorter: (record1, record2) => {
                return record1.title > record2.title
            }
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 3,
            sorter: (record1, record2) => {
                return record1.desc > record2.desc
            }
        },
        {
            title: 'Due Time',
            dataIndex: 'due',
            key: 4,
            sorter: (record1, record2) => {
                return record1.due > record2.due
            }
        },
        {
            title: 'Tag',
            dataIndex: 'tag',
            key: 5,
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 6,
            filters: [
                { text: "OPEN", value: "OPEN" },
                { text: "WORKING", value: "WORKING" },
                { text: "DONE", value: "DONE" },
                { text: "OVERDUE", value: "OVERDUE" }
            ],
            onFilter: (value, record) => {
                return record.text === value
            }

        },
        {
            title: 'Action',
            key: 7,
            render: (record) => {
                return (
                    <>
                        <EditOutlined style={{ color: "green", cursor: "pointer" }} onClick={(() => { handleEdit(record) })} />
                        <DeleteOutlined style={{ marginLeft: "1rem", color: "red", cursor: "pointer" }} onClick={() => { handleDelete(record) }} />
                    </>
                )
            }
        },
    ];

    const handleDelete = (record) => {
        Modal.confirm({
            title: "Are you sure You want to delete this TODO?",
            onOk: () => {
                setDataSource((prev) => {
                    return prev.filter((t) => t.title !== record.title)
                })
            }
        })
    }

    const handleEdit = (record) => {
        setIsEditing(true)
        setEditTodo({ ...record })
    }

    const handleOk = () => {
        setIsModalOpen(false);
        const time = new Date().toLocaleTimeString()
        const newTodo = { ...todo, time: time };
        // const newTodo = todo;
        setDataSource((prev) => {
            return [...prev, newTodo]
        })
        // dataSource.push(todo)
        // setDataSource(todo)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const resetEditing = () => {
        setIsEditing(false)
        setEditTodo(null)
    }





    return (
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "100%", margin: "auto" }}>
            <Button type="primary" style={{ fontWeight: "bold", color: "green", width: "10rem", margin: "auto", marginBottom: "2rem" }} onClick={() => setIsModalOpen(true)}>
                Create TODO
                <PlusCircleOutlined style={{ fontSize: "0.9rem", color: "green", marginLeft: "0.3rem" }} />
            </Button>
            <Search style={{ width: "10rem", marginLeft: "auto", marginBottom: "2rem" }} placeholder="Search" onSearch={(val) => { setSearchText(val) }} onChange={(e) => { setSearchText(e.target.value) }} />
            <div style={{}}>


                <Modal title="Add TODO" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input value={todo.time} name="time" type="time" required={true} disabled={true} hidden={true} onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                    <Input placeholder='Title' value={todo.title} required={true} name="title" max={100} onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                    <br />
                    <textarea placeholder='Description' value={todo.desc} name="desc" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} max={1000} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                    <br />
                    <input placeholder='due' value={todo.due} required={true} type="time" name="due" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                    <br />

                    {/* <input placeholder='tag' value={todo.tag} name="tag" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                    <br /> */}

                    <Select
                        mode="multiple"
                        style={{
                            width: '100%',
                        }}
                        placeholder="select one country"
                        defaultValue={todo.tag}
                        // value={todo.tag}
                        onChange={(e) => setTodo({ ...todo, tag: e })}
                        optionLabelProp="label"
                    >
                        <Select.Option value={"IMP "} label="IMP">
                            IMP
                        </Select.Option>
                        <Select.Option value={"OFFICE "} label="OFFICE">
                            OFFICE
                        </Select.Option>
                        <Option value="HOME " label="HOME">
                            HOME
                        </Option>
                    </Select>

                    {/* <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Tags Mode"
                        onChange={(i) => console.log(i)}
                        options={[{ "IMP": "IMP" }]}
                    /> */}

                    <input placeholder='status' value={todo.status} name="status" onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })} style={{ padding: "10px", width: "100%", marginBottom: "8px" }} />
                </Modal>


                <Table key={todo.time} dataSource={dataSource} columns={columns} style={{ width: "80rem", margin: "auto" }} pagination={{
                    current: page, pageSize: pageSize,
                    onChange: (page, pageSize) => {
                        setPage(page)
                        setPageSize(pageSize)
                    }
                }} />

                <Modal
                    title="Edit TODO"
                    open={isEditing}
                    onCancel={() => {
                        resetEditing()
                    }}
                    onOk={() => {
                        setDataSource(prev => {
                            return prev.map(t => {
                                if (t.title === editTodo.title) {
                                    return editTodo
                                }
                                else {
                                    return t
                                }
                            })
                        })
                        resetEditing()
                    }}
                >

                    <Input value={editTodo?.title} onChange={(e) => setEditTodo(prev => { return { ...prev, title: e.target.value } })} />
                    <Input value={editTodo?.desc} onChange={(e) => setEditTodo(prev => { return { ...prev, desc: e.target.value } })} />
                    <Input value={editTodo?.due} type="time" onChange={(e) => setEditTodo(prev => { return { ...prev, due: e.target.value } })} />
                    <Select
                        mode="multiple"
                        style={{
                            width: '100%',
                        }}
                        placeholder="select one country"
                        defaultValue={todo.tag}
                        // value={todo.tag}
                        onChange={(e) => setEditTodo(prev => { return { ...prev, tag: e } })}
                        optionLabelProp="label"
                    >
                        <Select.Option value={"IMP "} label="IMP">
                            IMP
                        </Select.Option>
                        <Select.Option value={"OFFICE "} label="OFFICE">
                            OFFICE
                        </Select.Option>
                        <Option value="HOME " label="HOME">
                            HOME
                        </Option>
                    </Select>
                    <Input value={editTodo?.status} onChange={(e) => setEditTodo(prev => { return { ...prev, status: e.target.value } })} />
                </Modal>



            </div>
        </div>
    )
}

export default Main
