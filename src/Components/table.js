import React from 'react'
import Table from 'react-bootstrap/Table'
import './index.css'
import Avatar from '@mui/material/Avatar';
import Drop from './dropDown';
import Button from './button'
import Data from '../data.json'


function table() {

    // console.log('ww',Data[0])
    let data = Data[0]




    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Aspek Penilaian 1</th>
                        <th>Aspek Penilaian 2</th>
                        <th>Aspek Penilaian 3</th>
                        <th>Aspek Penilaian 4</th>
                    </tr>
                </thead>

                <tbody>
                   
                        <tr>


                            <td><Avatar src="/broken-image.jpg" /></td>
                            <td><p2>Mahasiswa 1</p2></td>
                            <td></td>
                            <td><Drop /> </td>
                            <td><Drop />  </td>
                            <td><Drop /> </td>
                            <td><Drop />  </td>
                        </tr>


              



                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 2</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 3</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 4</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 5</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 6</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 7</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 8</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 9</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                    <tr>
                        <td><Avatar src="/broken-image.jpg" /></td>
                        <td><p2>Mahasiswa 10</p2></td>
                        <td></td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                        <td><Drop /> </td>
                        <td><Drop />  </td>
                    </tr>
                </tbody>
            </Table>
            <div className='simpan'>
                <Button />
            </div>
        </div>
    )
}

export default table
