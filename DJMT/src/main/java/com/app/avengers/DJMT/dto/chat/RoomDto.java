package com.app.avengers.DJMT.dto.chat;

import jakarta.persistence.GeneratedValue;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * packageName    : com.app.avengers.DJMT.dto.chat
 * fileName       : RoomDto
 * author         : Administrator
 * date           : 2024-01-14
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-01-14        Administrator       최초 생성
 */
@Getter
@Setter
public class RoomDto {

        private String room_id;
        private String name;


        /**
         * 채팅방 생성
         * @param name 방 이름
         * @return Room Entity
         */
        public static RoomDto createRoom(String name,String room_id) {
            RoomDto roomDto = new RoomDto();
            roomDto.setRoom_id(room_id);
            roomDto.setName(name);
            return roomDto;
        }

}
