import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

function useListing() {
    const axiosPublic = useAxiosPublic()

    const { refetch, isPending, data : listings=[] } = useQuery({
        queryKey: ['listings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/listings`) ;
            return res.data ;
        },
      })

    return [listings, isPending ,refetch]
}

export default useListing;