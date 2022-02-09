import request from '@/utils/request/v4'

export function getCourseList() {
  return request({
    url: '/',
    method: 'GET'
  })
}
export function createCourse(data) {
  return request({
    url: '/',
    method: 'POST',
    data
  })
}

export function editCourse(courseId, data) {
  return request({
    url: '/',
    method: 'PUT',
    data,
    params: { courseId }
  })
}

export function deleteCourse(courseId) {
  return request({
    url: `/`,
    method: 'DELETE',
    params: { courseId }
  })
}
