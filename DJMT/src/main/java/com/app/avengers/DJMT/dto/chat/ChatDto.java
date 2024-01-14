package com.app.avengers.DJMT.dto.chat;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

/**
 * packageName    : com.app.avengers.DJMT.dto.chat
 * fileName       : ChatDto
 * author         : Administrator
 * date           : 2024-01-13
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-01-13        Administrator       최초 생성
 */

@Getter
@Setter
public class ChatDto {
    private String chat_id;
    private String mem_no;
    private RoomDto room;
    private String sender;
    private String message;
    private LocalDateTime sendDate;

    /**
     * 채팅 생성
     * @param room 채팅 방
     * @param sender 보낸이
     * @param message 내용
     * @return Chat Entity
     */
    public static ChatDto createChat(RoomDto room, String chat_id, String sender, String message) {
        ChatDto chatDto = new ChatDto();
        chatDto.setChat_id(chat_id);
        chatDto.setSender(sender);
        chatDto.setMessage(message);

        return chatDto;
    }
}