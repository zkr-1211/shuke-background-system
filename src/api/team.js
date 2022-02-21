import request from '@/utils/request/v4'

// const teamApi = {
//   getCourseTeam: '/teams',
//   editCourseTeam: '/teams'
// }

export function getCourseTeam(course_id) {
  return request({
    url: '/teams',
    method: 'GET',
    params: {
      course_id
    }
  })
}

export function editCourseTeam(teamId, data) {
  return request({
    url: `/teams/${teamId}`,
    method: 'PUT',
    data
  })
}

export function searchTeamMembers(teamId, data) {
  return request({
    url: `/teams/${teamId}/members/search`,
    method: 'POST',
    data
  })
}

export function addTeamMembers(teamId, data) {
  return request({
    url: `/teams/${teamId}/members`,
    method: 'POST',
    data
  })
}

export function deleteTeamMembers(teamId, data) {
  return request({
    url: `/teams/${teamId}/members`,
    method: 'DELETE',
    data
  })
}

export function editTeamMembersPermissions(teamId, data) {
  return request({
    url: `/teams/${teamId}/members/settings`,
    method: 'PUT',
    data
  })
}

export function transferSuperAdministrator(teamId, data) {
  return request({
    url: `/teams/${teamId}/transfer/super-admin`,
    method: 'POST',
    data
  })
}
