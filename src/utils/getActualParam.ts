import {PacksParamType} from '../api/DataTypes';
import {startPage, startPageCount} from '../common/constants/projectConstant';
import {sortPacks} from '../common/enums/SortPacks';


export const getActualUrlPacksParam = (searchParams: URLSearchParams):PacksParamType => {
  return {
    packName: searchParams.get('packName') || undefined,
    min: Number(searchParams.get('min')) || undefined,
    max: Number (searchParams.get('max')) || undefined,
    sortPacks: searchParams.get('sortPacks') as sortPacks || undefined,
    page: Number(searchParams.get('page')) || startPage,
    pageCount: Number (searchParams.get('pageCount')) || startPageCount,
    user_id: searchParams.get('user_id') || undefined,
    block: Boolean(searchParams.get('block')) || undefined,
  }
}