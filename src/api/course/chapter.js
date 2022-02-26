import request from '@/utils/request/v4'

const chapterApi = '/chapter'


export function getChapterList(course_id) {
  return request({
    url: chapterApi,
    method: 'GET',
    params: { course_id }
  })
}
export function createChapter(course_id, data) {
  return request({
    url: chapterApi,
    method: 'POST',
    data,
    params: { course_id }
  })
}

export function getChapterInfo(chapterId) {
  return request({
    url: chapterApi,
    method: 'GET',
    params: { chapterId }

  })
}

export function editChapter(chapterId, data) {
  return request({
    url: chapterApi,
    method: 'PUT',
    data,
    params: { chapterId }
  })
}

export function deleteChapter(courseId) {
  return request({
    url: `/chapter`,
    method: 'DELETE',
    params: { courseId }
  })
}
export function getDeletedChapter(course_id) {
  return request({
    url: `/chapter/deleted`,
    method: 'GET',
    params: { course_id }
  })
}
