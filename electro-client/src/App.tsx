import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'dayjs/locale/vi';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import './App.css';
import ManagerPath from 'constants/ManagerPath';
import Client from './pages/Client';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import AddressManage, { AddressCreate, AddressUpdate } from 'pages/address';
import ProvinceManage, { ProvinceCreate, ProvinceUpdate } from 'pages/province';
import DistrictManage, { DistrictCreate, DistrictUpdate } from 'pages/district';
import UserManage, { UserCreate, UserUpdate } from 'pages/user';
import RoleManage, { RoleCreate, RoleUpdate } from 'pages/role';
import OfficeManage, { OfficeCreate, OfficeUpdate } from 'pages/office';
import DepartmentManage, { DepartmentCreate, DepartmentUpdate } from 'pages/department';
import JobTypeManage, { JobTypeCreate, JobTypeUpdate } from 'pages/job-type';
import JobLevelManage, { JobLevelCreate, JobLevelUpdate } from 'pages/job-level';
import JobTitleManage, { JobTitleCreate, JobTitleUpdate } from 'pages/job-title';
import EmployeeManage, { EmployeeCreate, EmployeeUpdate } from 'pages/employee';
import CustomerGroupManage, { CustomerGroupCreate, CustomerGroupUpdate } from 'pages/customer-group';
import CustomerStatusManage, { CustomerStatusCreate, CustomerStatusUpdate } from 'pages/customer-status';
import CustomerResourceManage, { CustomerResourceCreate, CustomerResourceUpdate } from 'pages/customer-resource';
import CustomerManage, { CustomerCreate, CustomerUpdate } from 'pages/customer';
import ProductManage, { ProductCreate, ProductUpdate } from 'pages/product';
import CategoryManage, { CategoryCreate, CategoryUpdate } from 'pages/category';
import BrandManage, { BrandCreate, BrandUpdate } from 'pages/brand';
import PropertyManage, { PropertyCreate, PropertyUpdate } from 'pages/property';
import SpecificationManage, { SpecificationCreate, SpecificationUpdate } from 'pages/specification';
import UnitManage, { UnitCreate, UnitUpdate } from 'pages/unit';
import TagManage, { TagCreate, TagUpdate } from 'pages/tag';
import GuaranteeManage, { GuaranteeCreate, GuaranteeUpdate } from 'pages/guarantee';
import SupplierManage, { SupplierCreate, SupplierUpdate } from 'pages/supplier';
import InventoryManage from 'pages/inventory';
import WarehouseManage, { WarehouseCreate, WarehouseUpdate } from 'pages/warehouse';
import DestinationManage, { DestinationCreate, DestinationUpdate } from 'pages/destination';
import DocketReasonManage, { DocketReasonCreate, DocketReasonUpdate } from 'pages/docket-reason';
import OrderManage from 'pages/order';
import OrderResourceManage, { OrderResourceCreate, OrderResourceUpdate } from 'pages/order-resource';
import OrderCancellationReasonManage, {
  OrderCancellationReasonCreate,
  OrderCancellationReasonUpdate
} from 'pages/order-cancellation-reason';
import PurchaseOrderManage, { PurchaseOrderCreate, PurchaseOrderUpdate } from 'pages/purchase-order';
import DocketManage, { DocketCreate, DocketUpdate } from 'pages/docket';
import TransferManage, { TransferCreate, TransferUpdate } from 'pages/transfer';

const queryClient = new QueryClient();

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <ModalsProvider>
              <Routes>
                <Route path="/" element={<Client/>}/>
                <Route path="/admin" element={<Admin/>}>
                  <Route index element={<AdminDashboard/>}/>
                  {/* ADDRESS */}
                  <Route path={ManagerPath.ADDRESS} element={<AddressManage/>}/>
                  <Route path={ManagerPath.ADDRESS + '/create'} element={<AddressCreate/>}/>
                  <Route path={ManagerPath.ADDRESS + '/update/:id'} element={<AddressUpdate/>}/>
                  {/* PROVINCE */}
                  <Route path={ManagerPath.PROVINCE} element={<ProvinceManage/>}/>
                  <Route path={ManagerPath.PROVINCE + '/create'} element={<ProvinceCreate/>}/>
                  <Route path={ManagerPath.PROVINCE + '/update/:id'} element={<ProvinceUpdate/>}/>
                  {/* DISTRICT */}
                  <Route path={ManagerPath.DISTRICT} element={<DistrictManage/>}/>
                  <Route path={ManagerPath.DISTRICT + '/create'} element={<DistrictCreate/>}/>
                  <Route path={ManagerPath.DISTRICT + '/update/:id'} element={<DistrictUpdate/>}/>
                  {/* USER */}
                  <Route path={ManagerPath.USER} element={<UserManage/>}/>
                  <Route path={ManagerPath.USER + '/create'} element={<UserCreate/>}/>
                  <Route path={ManagerPath.USER + '/update/:id'} element={<UserUpdate/>}/>
                  {/* ROLE */}
                  <Route path={ManagerPath.ROLE} element={<RoleManage/>}/>
                  <Route path={ManagerPath.ROLE + '/create'} element={<RoleCreate/>}/>
                  <Route path={ManagerPath.ROLE + '/update/:id'} element={<RoleUpdate/>}/>
                  {/* OFFICE */}
                  <Route path={ManagerPath.OFFICE} element={<OfficeManage/>}/>
                  <Route path={ManagerPath.OFFICE + '/create'} element={<OfficeCreate/>}/>
                  <Route path={ManagerPath.OFFICE + '/update/:id'} element={<OfficeUpdate/>}/>
                  {/* DEPARTMENT */}
                  <Route path={ManagerPath.DEPARTMENT} element={<DepartmentManage/>}/>
                  <Route path={ManagerPath.DEPARTMENT + '/create'} element={<DepartmentCreate/>}/>
                  <Route path={ManagerPath.DEPARTMENT + '/update/:id'} element={<DepartmentUpdate/>}/>
                  {/* JOB_TYPE */}
                  <Route path={ManagerPath.JOB_TYPE} element={<JobTypeManage/>}/>
                  <Route path={ManagerPath.JOB_TYPE + '/create'} element={<JobTypeCreate/>}/>
                  <Route path={ManagerPath.JOB_TYPE + '/update/:id'} element={<JobTypeUpdate/>}/>
                  {/* JOB_LEVEL */}
                  <Route path={ManagerPath.JOB_LEVEL} element={<JobLevelManage/>}/>
                  <Route path={ManagerPath.JOB_LEVEL + '/create'} element={<JobLevelCreate/>}/>
                  <Route path={ManagerPath.JOB_LEVEL + '/update/:id'} element={<JobLevelUpdate/>}/>
                  {/* JOB_TITLE */}
                  <Route path={ManagerPath.JOB_TITLE} element={<JobTitleManage/>}/>
                  <Route path={ManagerPath.JOB_TITLE + '/create'} element={<JobTitleCreate/>}/>
                  <Route path={ManagerPath.JOB_TITLE + '/update/:id'} element={<JobTitleUpdate/>}/>
                  {/* EMPLOYEE */}
                  <Route path={ManagerPath.EMPLOYEE} element={<EmployeeManage/>}/>
                  <Route path={ManagerPath.EMPLOYEE + '/create'} element={<EmployeeCreate/>}/>
                  <Route path={ManagerPath.EMPLOYEE + '/update/:id'} element={<EmployeeUpdate/>}/>
                  {/* CUSTOMER */}
                  <Route path={ManagerPath.CUSTOMER} element={<CustomerManage/>}/>
                  <Route path={ManagerPath.CUSTOMER + '/create'} element={<CustomerCreate/>}/>
                  <Route path={ManagerPath.CUSTOMER + '/update/:id'} element={<CustomerUpdate/>}/>
                  {/* CUSTOMER_GROUP */}
                  <Route path={ManagerPath.CUSTOMER_GROUP} element={<CustomerGroupManage/>}/>
                  <Route path={ManagerPath.CUSTOMER_GROUP + '/create'} element={<CustomerGroupCreate/>}/>
                  <Route path={ManagerPath.CUSTOMER_GROUP + '/update/:id'} element={<CustomerGroupUpdate/>}/>
                  {/* CUSTOMER_STATUS */}
                  <Route path={ManagerPath.CUSTOMER_STATUS} element={<CustomerStatusManage/>}/>
                  <Route path={ManagerPath.CUSTOMER_STATUS + '/create'} element={<CustomerStatusCreate/>}/>
                  <Route path={ManagerPath.CUSTOMER_STATUS + '/update/:id'} element={<CustomerStatusUpdate/>}/>
                  {/* CUSTOMER_RESOURCE */}
                  <Route path={ManagerPath.CUSTOMER_RESOURCE} element={<CustomerResourceManage/>}/>
                  <Route path={ManagerPath.CUSTOMER_RESOURCE + '/create'} element={<CustomerResourceCreate/>}/>
                  <Route path={ManagerPath.CUSTOMER_RESOURCE + '/update/:id'} element={<CustomerResourceUpdate/>}/>
                  {/* PRODUCT */}
                  <Route path={ManagerPath.PRODUCT} element={<ProductManage/>}/>
                  <Route path={ManagerPath.PRODUCT + '/create'} element={<ProductCreate/>}/>
                  <Route path={ManagerPath.PRODUCT + '/update/:id'} element={<ProductUpdate/>}/>
                  {/* CATEGORY */}
                  <Route path={ManagerPath.CATEGORY} element={<CategoryManage/>}/>
                  <Route path={ManagerPath.CATEGORY + '/create'} element={<CategoryCreate/>}/>
                  <Route path={ManagerPath.CATEGORY + '/update/:id'} element={<CategoryUpdate/>}/>
                  {/* BRAND */}
                  <Route path={ManagerPath.BRAND} element={<BrandManage/>}/>
                  <Route path={ManagerPath.BRAND + '/create'} element={<BrandCreate/>}/>
                  <Route path={ManagerPath.BRAND + '/update/:id'} element={<BrandUpdate/>}/>
                  {/* SUPPLIER */}
                  <Route path={ManagerPath.SUPPLIER} element={<SupplierManage/>}/>
                  <Route path={ManagerPath.SUPPLIER + '/create'} element={<SupplierCreate/>}/>
                  <Route path={ManagerPath.SUPPLIER + '/update/:id'} element={<SupplierUpdate/>}/>
                  {/* UNIT */}
                  <Route path={ManagerPath.UNIT} element={<UnitManage/>}/>
                  <Route path={ManagerPath.UNIT + '/create'} element={<UnitCreate/>}/>
                  <Route path={ManagerPath.UNIT + '/update/:id'} element={<UnitUpdate/>}/>
                  {/* TAG */}
                  <Route path={ManagerPath.TAG} element={<TagManage/>}/>
                  <Route path={ManagerPath.TAG + '/create'} element={<TagCreate/>}/>
                  <Route path={ManagerPath.TAG + '/update/:id'} element={<TagUpdate/>}/>
                  {/* GUARANTEE */}
                  <Route path={ManagerPath.GUARANTEE} element={<GuaranteeManage/>}/>
                  <Route path={ManagerPath.GUARANTEE + '/create'} element={<GuaranteeCreate/>}/>
                  <Route path={ManagerPath.GUARANTEE + '/update/:id'} element={<GuaranteeUpdate/>}/>
                  {/* PROPERTY */}
                  <Route path={ManagerPath.PROPERTY} element={<PropertyManage/>}/>
                  <Route path={ManagerPath.PROPERTY + '/create'} element={<PropertyCreate/>}/>
                  <Route path={ManagerPath.PROPERTY + '/update/:id'} element={<PropertyUpdate/>}/>
                  {/* SPECIFICATION */}
                  <Route path={ManagerPath.SPECIFICATION} element={<SpecificationManage/>}/>
                  <Route path={ManagerPath.SPECIFICATION + '/create'} element={<SpecificationCreate/>}/>
                  <Route path={ManagerPath.SPECIFICATION + '/update/:id'} element={<SpecificationUpdate/>}/>
                  {/* INVENTORY */}
                  <Route path={ManagerPath.INVENTORY} element={<InventoryManage/>}/>
                  {/* WAREHOUSE */}
                  <Route path={ManagerPath.WAREHOUSE} element={<WarehouseManage/>}/>
                  <Route path={ManagerPath.WAREHOUSE + '/create'} element={<WarehouseCreate/>}/>
                  <Route path={ManagerPath.WAREHOUSE + '/update/:id'} element={<WarehouseUpdate/>}/>
                  {/* DESTINATION */}
                  <Route path={ManagerPath.DESTINATION} element={<DestinationManage/>}/>
                  <Route path={ManagerPath.DESTINATION + '/create'} element={<DestinationCreate/>}/>
                  <Route path={ManagerPath.DESTINATION + '/update/:id'} element={<DestinationUpdate/>}/>
                  {/* DOCKET_REASON */}
                  <Route path={ManagerPath.DOCKET_REASON} element={<DocketReasonManage/>}/>
                  <Route path={ManagerPath.DOCKET_REASON + '/create'} element={<DocketReasonCreate/>}/>
                  <Route path={ManagerPath.DOCKET_REASON + '/update/:id'} element={<DocketReasonUpdate/>}/>
                  {/* ORDER */}
                  <Route path={ManagerPath.ORDER} element={<OrderManage/>}/>
                  {/* ORDER_RESOURCE */}
                  <Route path={ManagerPath.ORDER_RESOURCE} element={<OrderResourceManage/>}/>
                  <Route path={ManagerPath.ORDER_RESOURCE + '/create'} element={<OrderResourceCreate/>}/>
                  <Route path={ManagerPath.ORDER_RESOURCE + '/update/:id'} element={<OrderResourceUpdate/>}/>
                  {/* ORDER_CANCELLATION_REASON */}
                  <Route path={ManagerPath.ORDER_CANCELLATION_REASON} element={<OrderCancellationReasonManage/>}/>
                  <Route
                    path={ManagerPath.ORDER_CANCELLATION_REASON + '/create'}
                    element={<OrderCancellationReasonCreate/>}
                  />
                  <Route
                    path={ManagerPath.ORDER_CANCELLATION_REASON + '/update/:id'}
                    element={<OrderCancellationReasonUpdate/>}
                  />
                  {/* PURCHASE_ORDER */}
                  <Route path={ManagerPath.PURCHASE_ORDER} element={<PurchaseOrderManage/>}/>
                  <Route path={ManagerPath.PURCHASE_ORDER + '/create'} element={<PurchaseOrderCreate/>}/>
                  <Route path={ManagerPath.PURCHASE_ORDER + '/update/:id'} element={<PurchaseOrderUpdate/>}/>
                  {/* DOCKET */}
                  <Route path={ManagerPath.DOCKET} element={<DocketManage/>}/>
                  <Route path={ManagerPath.DOCKET + '/create'} element={<DocketCreate/>}/>
                  <Route path={ManagerPath.DOCKET + '/update/:id'} element={<DocketUpdate/>}/>
                  {/* TRANSFER */}
                  <Route path={ManagerPath.TRANSFER} element={<TransferManage/>}/>
                  <Route path={ManagerPath.TRANSFER + '/create'} element={<TransferCreate/>}/>
                  <Route path={ManagerPath.TRANSFER + '/update/:id'} element={<TransferUpdate/>}/>
                </Route>
              </Routes>
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
