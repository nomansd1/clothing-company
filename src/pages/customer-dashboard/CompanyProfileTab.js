import React from 'react'
import { logo } from '../../assets/images'
import {
  useGetCompanyDetailsQuery
} from "../../apis/companyManager/index";
import { useSelector } from 'react-redux';

function CompanyProfileTab() {
  const { data, error, isLoading } =useGetCompanyDetailsQuery();
console.log("data",data);
const auth=useSelector(state=>state.authUser);
const managerName=auth?.user?.result.name;
const managerPassword=auth?.user?.result.managerPassword
  return (
    <div>
     {isLoading?<h1>...loading</h1>: <div class="bg-white text-black shadow-md p-6">
  <div class="flex items-center mb-6">
    <img src={logo} alt="Company Logo" class="w-36 mr-2" />
  </div>
  <div class="flex flex-wrap md:grid md:grid-cols-2 gap-4">
    <div>
      <p class="font-medium">Company:</p>
      <p>{data.companyName}</p>
    </div>
    <div>
      <p class="font-medium">Telephone:</p>
      <p>{data.companyPhone}</p>
    </div>
    <div>
      <p class="font-medium">Fax:</p>
      <p>{data.companyFax}</p>
    </div>
    <div>
      <p class="font-medium">Email:</p>
      <p>{data.companyEmail}</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">Username:</p>
      <p>{managerName}</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">Password:</p>
      <p>{managerPassword}</p>
    </div>
  </div>
</div>}

    </div>
  )
}

export default CompanyProfileTab