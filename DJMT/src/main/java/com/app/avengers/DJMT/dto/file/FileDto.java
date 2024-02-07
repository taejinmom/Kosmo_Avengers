package com.app.avengers.DJMT.dto.file;

import lombok.Getter;
import lombok.Setter;

/**
 * packageName    : com.app.avengers.DJMT.dto
 * fileName       : FileDto
 * author         : Administrator
 * date           : 2024-02-04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-04        Administrator       최초 생성
 */
@Getter
@Setter
public class FileDto {
    private String file_id;
    private String file_path;
    private String file_name;
    private String file_orgname;
    private String del_yn = "N";
    private String file_type;
    private String file_full_path;
    private String vol_type;
    private String reg_id;
    private String reg_date;
    private String chg_id;
    private String chg_date;

}
