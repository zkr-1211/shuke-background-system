import request from '@/utils/request/v4'

const sectionApi = '/section'


export function getsectionList(chapter_id) {
  return request({
    url: sectionApi,
    method: 'GET',
    params: { chapter_id }
  })
}
export function createSection(chapter_id, data) {
  return request({
    url: sectionApi,
    method: 'POST',
    data,
    params: { chapter_id }
  })
}

export function getSectionInfo(sectionId) {
  return request({
    url: sectionApi,
    method: 'GET',
    params: { sectionId }

  })
}

export function editSection(sectionId, data) {
  return request({
    url: sectionApi,
    method: 'PUT',
    data,
    params: { sectionId }
  })
}

export function deleteSection(sectionId) {
  return request({
    url: `/section`,
    method: 'DELETE',
    params: { sectionId }
  })
}
export function getDeletedsection(chapter_id) {
  return request({
    url: `/section/deleted`,
    method: 'GET',
    params: { chapter_id }
  })
}
