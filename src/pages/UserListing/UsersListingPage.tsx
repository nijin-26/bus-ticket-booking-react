// export const UsersListingPage = () => {
//     const { t } = useTranslation('usersList');
//     const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

//     const updateSearchParams = (newPage: string) => {
//         searchParams.set('page', String(newPage));
//         setSearchParams(searchParams);
//     };
//     const columns = getUsersTableColumns(t);

//     const [pageState, setPageState] = useState<IPagination<IUser>>({
//         loading: true,
//         page: Number(searchParams.get('page')) - 1 || 0,
//         pageSize: 10,
//         totalNumberOfData: 0,
//         data: [],
//     });

//     const updatePageState = (newPageState: Partial<IPagination<IUser>>) => {
//         setPageState((prev) => ({ ...prev, ...newPageState }));
//     };

//     useEffect(() => {
//         //Fething data
//         void (async () => {
//             try {
//                 setPageState((prev) => ({ ...prev, loading: true }));
//                 const usersResponse = await getAllUsers();
//                 setPageState((prev) => ({
//                     ...prev,
//                     data: usersResponse,
//                     totalNumberOfData: usersResponse.length,
//                 }));
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setPageState((prev) => ({ ...prev, loading: false }));
//             }
//         })();
//     }, []);

//     return (
//         <ListingPageWrapper>
//             <Stack sx={{ my: '3rem' }} direction={'row'} spacing={5}>
//                 <Box component="div" className="boxes">
//                     <h2>{t('usersList')}</h2>
//                 </Box>
//                 <Box
//                     component="div"
//                     className="boxes box-bg"
//                     boxShadow={3}
//                     borderRadius={2}
//                 >
//                     <Stack direction={'column'} className="box-col">
//                         <Typography
//                             variant="body2"
//                             className="title"
//                             textAlign={'left'}
//                         >
//                             {t('totalUsers')}
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             className="value"
//                             textAlign={'center'}
//                         >
//                             {pageState.loading ? (
//                                 <CircularProgress />
//                             ) : (
//                                 pageState.totalNumberOfData
//                             )}
//                         </Typography>
//                     </Stack>
//                 </Box>
//             </Stack>
//             <CustomTable<IUser>
//                 pageState={pageState}
//                 updatePageState={updatePageState}
//                 updateSearchParams={updateSearchParams}
//                 columns={columns}
//                 rowId={'id'}
//                 languageNamespace={'usersList'}
//             />
//         </ListingPageWrapper>
//     );
// };
import { useTranslation } from 'react-i18next';
import { DatagridListingPage } from '../../components/DatagridListingpage/DatagridListingPage';
import { IUser } from '../../types';
import getUsersTableColumns from './getUsersTableColumns';
import { getAllUsers } from '../../api/endpoints/user.api';

export const UsersListingPage = () => {
    const { t } = useTranslation('usersList');
    const columns = getUsersTableColumns(t);
    return (
        <DatagridListingPage<IUser>
            columns={columns}
            t={t}
            getData={getAllUsers}
            rowId={'id'}
        />
    );
};
